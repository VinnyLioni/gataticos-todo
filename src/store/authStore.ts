import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "../ts/firebase";
import { GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore('authStore', () => {
    interface User {
        displayName: string;
        email: string;
        photoURL: string;
        uid: string;
        metadata: {
            creationTime: string;
            lastSignInTime: string;
        };
    }

    interface userDetail {
        displayName: string,
        email: string,
        photoURL: string,
        uid: string
    }
    
    const router = useRouter()
    router
    const user = ref<User>()
    const uid = ref<string>('')
    const userDetail = ref<userDetail>()

    const loginGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                if (result && result.user) {
                    const userData: User = {
                        displayName: result.user.displayName || '',
                        email: result.user.email || '',
                        photoURL: result.user.photoURL || '',
                        uid: result.user.uid || '',
                        metadata: {
                            lastSignInTime: result.user.metadata.lastSignInTime || '',
                            creationTime: result.user.metadata.creationTime || ''
                          }
                    }
                    user.value = userData
                    uid.value = userData.uid
                    // toast.callToast('success', `Bem vindo ${result.user.displayName}!`)
                } else {
                    console.error('Usuário não localizado')
                }
            }).catch((error: any) => {
                console.error(error)
            })
    }

    const init = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                uid.value = user.uid
                userDetail.value = {
                  displayName: user.displayName || '',
                  email: user.email || '',
                  photoURL: user.photoURL || '',
                  uid: user.uid || ''  
                }
                console.log('dados do usuário', uid)
                router.push({ name: 'home' })
            } else {
                // toast.callToast('success', 'Logout feito com sucesso.')
                console.log('Deu errado')
            }
        })
    }

    const logoff = () => {
        signOut(auth)
            .then(() => {
                window.location.reload()
            })
    }


    return {
        user, uid, userDetail, loginGoogle, logoff, init
    }
})
