"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

const SPREADSHEET_ID = "1Zs9ncLwWvTnP52b0_i8xCD6dytQyOvZeHbaAoa5oBy4"

const serviceAccountAuth = new JWT({
  email: "web-malumotlari@aqueous-argon-454316-h5.iam.gserviceaccount.com",
  key: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVbt9djX+Mra3X
uFx9i5/eE9DnkHGWvrqj5P/bXYbZc11ieufl1WBDTGxhY/7IGsW637dUUUVLW7vN
mmF7a27VTU9WB8G08b32IzbekG8ccyxPqhPI7JeXuhlo6+6WMKm1eqHAG+lPyRFZ
izkBd4rD/1ZnKhcrZ52zHUX05RxzuN3jhP8/sw4xfiPf8FtD55M5Ag0j77+Yn3ku
2mcVDBonrzkH64+sol/XNAkispKtEyfG46QgLFf0hCxMvr8Vy3AZcVIHT0wY3X4a
Ur9LIgYJRNIwabQcZVrNlDAh1pIOuy5sRDKyeWRxvwiP3LIOp4aL9ExYtymMTdJc
Wder68znAgMBAAECggEAFyoMj7TXYLLW9SQ77i2T4XntPcrgg3owdic8WZXUyWY+
mSgCmlhVJ57ersrbRstjpbV39qbx2MiGbczwhJB2/14Qc35t/YMl1n8cn9aq6rGY
h7GOh0HUZALyB8I0W219Y/JNGvnDVTNkMEnKffA5KhXYSn4LVmv7AGDZedN+8W8q
Xw0s94eYwybWnR5rEhU2ja2Mdn06yik5cO3bJNcDNxfkBPpleGUYAsRCxcjGJhKn
qXh4axpqf2ADgzLuy4Aem4SeET4giS88mjNx3X4BUydBoUc6PW/kn6qqD0TuFzZY
lDG0xeUVfJHfpq6uWfRnHvcspVgUFxdC35HAW0Ao6QKBgQDIop9QXn7aglBhp5/5
SPH4uzCiy7QKrN2VJ6nY/tCjr/Co21G0FIXdu7GgR7Bs7+IoK4qybWNbqLQ9x7PJ
9CzHm7bkNK/iAnurLdFRpUupVPB8J94biRYIE3GgRC1MpfiN12eoLC22D2sFB9jL
/YNVt6WC6W0mCi164/ebZZb+PwKBgQC+qzOsXgM2SCvjI6VYMdgIh4z2lHMYZo44
07R6WNIXlByLPREA9xnsa8clpQf4VZ2/Mw3e9x/hp08o4RVOWYrh+Hh/gewnpqoM
pL8L4KnNbYKRpiFccUVrH1F1uUHnjWFNPUARuyVDpE1ualF+ZBgQX0sYuyYlCzZR
+yzyIHpXWQKBgF7Z+uVc9y3IY8X3IDsTEEod/P1JvmE5njvwl2yd8vcfq2+41+SB
u1O7c1sp6S9nLQz+oMB/1HQ1yphWfBni1PS9GfbDLc90ixC/RXEK6z0vic24b1mn
MoI45wP0l1HgOSSdjETGNgoXOeoT7ptpy5hPjPDZ+B7+useZVKrjmUGzAoGBALQh
k/jk/I3c0zGMrJnMxTcRsJgIGVBVG0oOn/PyU9GYyPq2n4jU6fXUwNkMt6HiaNyI
xDMAL2uFICETvIg/yhjAID7+JHg1WXQGdMMo5eLA8djeJahrDtUsSk44zk2O4P0S
v6PAtWzZHZoR8ZnBwIY/MPhVXq0ikZgT/xtkmZBJAoGAIRiO4cGLkgPR4FLZwO+g
Q0zvaKoxTQJpeiwmwTPT1EmhOC1jrydC9ZV2sx04dW/DmDdLRCszbom+p2PeY+aK
fnO7n2Ldo0wriEA3TYH91JrjqeKPOJBiSvQZwOrnFo3FJ5pGcWUClP3Dd2EQkqwy
ZFodarS4NReVEkE2stM/F6I=
-----END PRIVATE KEY-----`,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
})

interface FormData {
  name: string
  phone: string
}

export async function submitToGoogleSheets(formData: FormData) {
  try {
    // Initialize the sheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]

    // Check if sheet has headers by trying to get header values
    let hasHeaders = false
    try {
      const headerValues = sheet.headerValues
      if (headerValues && headerValues.length > 0) {
        hasHeaders = true
      }
    } catch (error) {
      hasHeaders = false
    }

    // If no headers, set them
    if (!hasHeaders) {
      await sheet.setHeaderRow(["Sana", "Ism", "Telefon", "Status"])
      // Reload sheet info after setting headers
      await sheet.loadHeaderRow()
    }

    // Add the new row
    const currentDate = new Date().toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })

    await sheet.addRow({
      Sana: currentDate,
      Ism: formData.name,
      Telefon: formData.phone,
      Status: "Yangi",
    })

    return { success: true }
  } catch (error) {
    console.error("Google Sheets error:", error)
    return {
      success: false,
      error: "Ma'lumotlarni saqlashda xatolik yuz berdi",
    }
  }
}
