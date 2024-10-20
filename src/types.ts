export type State = {
    isRegistered: boolean;
} 

export type Action = {
    updateIsRegistered: (data: State['isRegistered']) => void
}