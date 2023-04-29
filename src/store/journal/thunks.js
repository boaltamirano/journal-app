import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getDate(),
        }

        const newDoc = doc(collection( FirebaseDB, `${uid}/journal/notes` ));
        const setDocResp = await setDoc(newDoc, newNote);

        console.log({newDoc, setDocResp})

    }
}