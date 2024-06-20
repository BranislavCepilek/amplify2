import { defineStorage } from "@aws-amplify/backend";
export const storage = defineStorage({
    name: 'amplifyUniledDrive',
    access: (allow) => ({
        'katalog/*': [
            allow.guest.to(['get']),
        ]
    })
});