import React,
{
    useEffect,
    createContext,
    useState,
    ReactNode,
    Dispatch,
    SetStateAction,
    useMemo,
} from "react"
import { TagData } from "../Models/TagData"
import { Conversation } from "../Models/Conversation"

interface ErrorType {
    [key: string]: {
        title: string;
        body: string;
        variant: string;
        timeOut?: number;
        action?: () => void;
    };
}

interface ViewContextProps {
    currentProperty: string;
    setCurrentProperty: Dispatch<SetStateAction<string>>;
    sideSheetOpen: boolean;
    setSideSheetOpen: Dispatch<SetStateAction<boolean>>;
    sheetWidth: number
    setSheetWidth: Dispatch<SetStateAction<number>>;
    activeTagData: TagData | undefined;
    setActiveTagData: Dispatch<SetStateAction<TagData | undefined>>;
    activeSheetTab: number;
    setActiveSheetTab: Dispatch<SetStateAction<number>>;
    conversations: Conversation[];
    setConversations: Dispatch<SetStateAction<Conversation[]>>;
    activeConversation: Conversation | undefined;
    setActiveConversation: Dispatch<SetStateAction<Conversation | undefined>>;
    errors: ErrorType;
    setErrors: React.Dispatch<React.SetStateAction<ErrorType>>;
    SideSheetScrollPos : number;
    setSideSheetScrollPos : React.Dispatch<React.SetStateAction<number>>;
    containerReviews: Components.Schemas.ContainerReviewDto[]
    setContainerReviews: Dispatch<SetStateAction<Components.Schemas.ContainerReviewDto[]>>
    containerReviewers: Components.Schemas.ContainerReviewerDto[]
    setContainerReviewers: Dispatch<SetStateAction<Components.Schemas.ContainerReviewerDto[]>>
    currentUserId: string
    setCurrentUserId: Dispatch<SetStateAction<string>>
    pathSegments: string[]
    setPathSegments: Dispatch<SetStateAction<string[]>>

}

export const ViewContext = createContext<ViewContextProps>({
    currentProperty: "",
    setCurrentProperty: () => { },
    sideSheetOpen: false,
    setSideSheetOpen: () => { },
    sheetWidth: 0,
    setSheetWidth: () => { },
    activeTagData: undefined,
    setActiveTagData: () => { },
    activeSheetTab: 0,
    setActiveSheetTab: () => { },
    conversations: [],
    setConversations: () => { },
    activeConversation: undefined,
    setActiveConversation: () => { },
    errors: {},
    setErrors: () => { },
    SideSheetScrollPos: 0,
    setSideSheetScrollPos: () => { },
    containerReviews: [],
    setContainerReviews: () => { },
    containerReviewers: [],
    setContainerReviewers: () => { },
    currentUserId: "",
    setCurrentUserId: () => "",
    pathSegments: [],
    setPathSegments: () => { },
})

interface ViewContextProviderProps {
    children: ReactNode
}
export const ViewContextProvider: React.FC<ViewContextProviderProps> = ({
    children,
}: ViewContextProviderProps) => {
    const [currentProperty, setCurrentProperty] = useState<string>("")
    const [sideSheetOpen, setSideSheetOpen] = useState<boolean>(() => localStorage.getItem("isSideSheetOpen") === "true")
    const [sheetWidth, setSheetWidth] = useState<number>(() => (sideSheetOpen ? 620 : 0))
    const [activeTagData, setActiveTagData] = useState<TagData>()
    const [activeSheetTab, setActiveSheetTab] = useState<number>(() => parseInt(localStorage.getItem("activeSheetTab") || "0", 10))
    const [SideSheetScrollPos, setSideSheetScrollPos] = useState<number>(() => parseInt(localStorage.getItem("SideSheetScrollPos") || "0", 10))
    const [conversations, setConversations] = useState<Conversation[]>([])
    const [activeConversation, setActiveConversation] = useState<Conversation>()
    const [containerReviews, setContainerReviews] = useState<Components.Schemas.ContainerReviewDto[]>([])
    const [containerReviewers, setContainerReviewers] = useState<Components.Schemas.ContainerReviewerDto[]>([])
    const [errors, setErrors] = useState<{}>({})
    const [currentUserId, setCurrentUserId] = useState<string>("")
    const [pathSegments, setPathSegments] = useState<string[]>([])

    useEffect(() => {
        localStorage.setItem("isSideSheetOpen", JSON.stringify(sideSheetOpen))
    }, [sideSheetOpen])

    // Save activeSheetTab to localStorage
    useEffect(() => {
        localStorage.setItem("activeSheetTab", activeSheetTab.toString())
    }, [activeSheetTab])

    // Save SideSheetScrollPos to localStorage
    useEffect(() => {
        localStorage.setItem("SideSheetScrollPos", SideSheetScrollPos.toString())
    }, [activeSheetTab])

    useEffect(() => {
        if (sideSheetOpen) {
            setSheetWidth(620)
        } else {
            setSheetWidth(0)
        }
    }, [sideSheetOpen])

    const value = useMemo(
        () => ({
            activeTagData,
            setActiveTagData,
            sideSheetOpen,
            setSideSheetOpen,
            sheetWidth,
            setSheetWidth,
            activeSheetTab,
            setActiveSheetTab,
            conversations,
            setConversations,
            activeConversation,
            setActiveConversation,
            errors,
            setErrors,
            SideSheetScrollPos,
            setSideSheetScrollPos,
            containerReviews,
            setContainerReviews,
            containerReviewers,
            setContainerReviewers,
            currentUserId,
            setCurrentUserId,
            currentProperty,
            setCurrentProperty,
            pathSegments,
            setPathSegments,
        }),
        [
            activeTagData,
            setActiveTagData,
            sideSheetOpen,
            setSideSheetOpen,
            sheetWidth,
            setSheetWidth,
            activeSheetTab,
            setActiveSheetTab,
            conversations,
            setConversations,
            activeConversation,
            setActiveConversation,
            errors,
            setErrors,
            SideSheetScrollPos,
            setSideSheetScrollPos,
            containerReviews,
            setContainerReviews,
            containerReviewers,
            setContainerReviewers,
            currentUserId,
            setCurrentUserId,
            currentProperty,
            setCurrentProperty,
            pathSegments,
            setPathSegments,
        ],
    )

    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
}