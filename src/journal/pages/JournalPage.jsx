import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad praesentium nesciunt molestiae temporibus blanditiis error explicabo porro quisquam laboriosam laudantium inventore enim eligendi hic ducimus, eveniet, at qui nemo aspernatur.</Typography> */}
            <NothingSelectedView />
        </JournalLayout>
    )
}
