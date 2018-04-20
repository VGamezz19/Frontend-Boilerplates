
export interface AvatarsFace {
    eyes: string[];
    nose: string[];
    mouth: string[];
}

export interface State {
    faceParts: AvatarsFace;
}

export const state = (): State => ({
    faceParts: null
});