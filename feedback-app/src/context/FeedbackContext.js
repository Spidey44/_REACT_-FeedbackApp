import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 9,
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 10,
        },
        {
            id: 3,
            text: 'This item is from context 3',
            rating: 1,
        },
        {
            id: 4,
            text: 'This item is from context 4',
            rating: 9,
        },
    ])

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        console.log("newFeedback", newFeedback)
        setFeedback([newFeedback, ...feedback])

    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    //delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                // function
                editFeedback,
                // object + state holding the item and boolean
                feedbackEdit,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext