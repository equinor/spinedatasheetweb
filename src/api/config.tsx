export type ServiceConfig = {
    BASE_URL: string
    accessToken?: string
    headers?: Record<string, string>
}

const configuration = {
    ProjectService: {
        BASE_URL: "",
    },
    TagDataService: {
        BASE_URL: "",
    },
    ContractService: {
        BASE_URL: "",
    },
    ConversationService: {
        BASE_URL: "",
    },
    MessageService: {
        BASE_URL: "",
    },
    UserTagService: {
        BASE_URL: "",
    },
    ContainerService: {
        BASE_URL: "",
    },
    ContainerReviewService: {
        BASE_URL: "",
    },
    ContainerReviewerService: {
        BASE_URL: "",
    },
    TagReviewerService: {
        BASE_URL: "",
    },
}

export const buildConfig = (baseUrl: string) => {
    configuration.ProjectService.BASE_URL = `${baseUrl}/projects`
    configuration.TagDataService.BASE_URL = `${baseUrl}`
    configuration.ContractService.BASE_URL = `${baseUrl}/contracts`
    configuration.ConversationService.BASE_URL = `${baseUrl}`
    configuration.MessageService.BASE_URL = `${baseUrl}/conversations`
    configuration.UserTagService.BASE_URL = `${baseUrl}/usertags`
    configuration.ContainerService.BASE_URL = `${baseUrl}/containers`
    configuration.ContainerReviewService.BASE_URL = `${baseUrl}/container-reviews`
    configuration.ContainerReviewerService.BASE_URL = `${baseUrl}`
    configuration.TagReviewerService.BASE_URL = `${baseUrl}`
}

export const config = Object.freeze(configuration)

export const LoginAccessTokenKey = "loginAccessToken"

export function StoreAppScope(appScope: string) {
    window.sessionStorage.setItem("appScope", appScope)
}

export function GetToken(keyName: string) {
    const scopes = [[window.sessionStorage.getItem("appScope") || ""][0]]
    if (scopes[0] === "") {
        console.log("No app scope found. Using default scope.")
        scopes[0] = "api://412803ed-0c05-44a9-b433-b270706a6099/Datasheet.Write"
    }
    // @ts-ignore
    return window.Fusion.modules.auth.acquireAccessToken({ scopes })
}