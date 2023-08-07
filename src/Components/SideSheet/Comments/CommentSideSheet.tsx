import React, {
 FC, Dispatch, SetStateAction, useState,
} from "react"
import styled from "styled-components"
import { Button, Icon, Tooltip } from "@equinor/eds-core-react"
import { search, filter_alt } from "@equinor/eds-icons"
import { ReviewComment } from "../../../Models/ReviewComment"
import CommentView from "./Components/CommentView"
import LocalNavigation from "../Components/LocalNavigation"
import TabsTitle from "../Components/TabsTitle"
import ConversationCard from "./Components/ConversationCard"

type Props = {
  currentProperty?: string;
  setCurrentProperty: Dispatch<SetStateAction<string>>;
  reviewComments: ReviewComment[];
  setReviewComments: Dispatch<SetStateAction<ReviewComment[]>>;
};

const Container = styled.div`
  padding: 15px;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ButtonRow = styled.div`
  margin-bottom: 8px;
`

const CommentSideSheet: FC<Props> = ({
  currentProperty,
  setCurrentProperty,
  reviewComments,
  setReviewComments,
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const Navigationbuttons = [
    "All",
    "Open",
    "To be implemented",
    "Closed",
    "Implemented",
  ]

  const dummyConversations = [
    // Dummy data for the "All" tab
    [
      { title: "Test conversation 1 (All)", tagInfo: "Tag 1" },
      { title: "Test conversation 2 (All)", tagInfo: "Tag 2" },
    ],
    // Dummy data for the "Open" tab
    [
      { title: "Test conversation 1 (Open)", tagInfo: "Tag 1" },
      { title: "Test conversation 2 (Open)", tagInfo: "Tag 2" },
    ],
    // Dummy data for the "To be implemented" tab
    [
      { title: "Test conversation 1 (To be implemented)", tagInfo: "Tag 1" },
      { title: "Test conversation 2 (To be implemented)", tagInfo: "Tag 2" },
    ],
    // Dummy data for the "Closed" tab
    [
      { title: "Test conversation 1 (Closed)", tagInfo: "Tag 1" },
      { title: "Test conversation 2 (Closed)", tagInfo: "Tag 2" },
    ],
    // Dummy data for the "Implemented" tab
    [
      { title: "Test conversation 1 (Implemented)", tagInfo: "Tag 1" },
      { title: "Test conversation 2 (Implemented)", tagInfo: "Tag 2" },
    ],
  ]

  return (
      <Container>
          <Header>
              <TabsTitle>Activity</TabsTitle>
              <ButtonRow>
                  <Tooltip title="Search">
                      <Button variant="ghost_icon">
                          <Icon data={search} />
                      </Button>
                  </Tooltip>
                  <Tooltip title="Filter">
                      <Button variant="ghost_icon">
                          <Icon data={filter_alt} />
                      </Button>
                  </Tooltip>
              </ButtonRow>
          </Header>
          <LocalNavigation
              buttons={Navigationbuttons}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
          />
          {
              <div>
                  {dummyConversations[activeTab].map((conversation) => (
                      <ConversationCard
                          key={conversation.title} // Add a key prop for each rendered element
                          title={conversation.title}
                          tagInfo={conversation.tagInfo}
                      />
          ))}
              </div>
      }
      </Container>
  )
}

export default CommentSideSheet

/*
currentProperty !== undefined && currentProperty !== null ? (
              <CommentView
                  currentProperty={currentProperty}
                  reviewComments={reviewComments}
                  setReviewComments={setReviewComments}
              />
      ) : (
*/
