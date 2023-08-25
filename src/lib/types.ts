export interface ErrorsType {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
    current_password?: string[];
}

export interface UserType {
    id?: number;
    name?: string;
    email?: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string;
}

export interface AuthorizationType {
    token: string;
    type: string;
}

export interface User {
    user: UserType;
}

export interface UserResponseType {
    message?: string;
    user: UserType;
    authorization: AuthorizationType;
}

export interface UserContextType {
    user: UserType;
    authToken: string;
    userlLogin: (userResponse?: UserResponseType) => void,
    userlLogout: () => void,
}
