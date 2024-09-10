
    export type RemoteKeys = 'litApp/MFE';
    type PackageType<T> = T extends 'litApp/MFE' ? typeof import('litApp/MFE') :any;