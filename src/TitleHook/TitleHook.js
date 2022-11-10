import { useEffect } from "react";
const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-it Technician`;
    }, [title])

}
export default UseTitle;