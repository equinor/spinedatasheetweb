import React, { useState } from "react"
import { MentionsInput, Mention } from "react-mentions"
import styled from "styled-components"

const ListElement = styled.div`
    padding: 10px 15px;
    max-height: 200px;

    &:hover {
        background-color: #f5f5f5;
    }
`

const StyledMentionsInput = styled(MentionsInput)`
    min-height: 40px; 
    box-sizing: border-box;
    max-height: 200px;

    textarea {
        border: 1px solid #ccc;
        padding: 10px;
        max-height: 200px;

    }
`

const users = [
    { id: "1", display: "Alice" },
    { id: "2", display: "Bob" },
    { id: "3", display: "Charlie" },
]

const TaggableField = () => {
    const [value, setValue] = useState("")

    return (
        <StyledMentionsInput
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            placeholder="Write a comment..."
            forceSuggestionsAboveCursor
        >
            <Mention
                trigger="@"
                data={users}
                renderSuggestion={(suggestion, search, highlightedDisplay, index, focused) => (
                    <ListElement className={`user ${focused ? "focused" : ""}`}>
                        {highlightedDisplay}
                    </ListElement>
                )}
            />
        </StyledMentionsInput>
    )
}

export default TaggableField
