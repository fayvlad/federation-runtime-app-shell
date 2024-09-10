
    export type RemoteKeys = 'reactApp/MFE';
    type PackageType<T> = T extends 'reactApp/MFE' ? typeof import('reactApp/MFE') :any;