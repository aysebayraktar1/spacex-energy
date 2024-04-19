export interface User {
    id: string;
    email: string;
    permission: PermissionType;
}

export enum PermissionType {
    ALL = 1,
}