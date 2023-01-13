export interface iDrone {
    serialNumber: string,
    timestamp: string,
    distance: number,
    positionX: number,
    positionY: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    expiresAt?: Date;
}

