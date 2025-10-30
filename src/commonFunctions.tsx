export const setDeviceIdInLS = (deviceId: string) => {
    localStorage.setItem("deviceId", deviceId);
};

export const getDeviceIdFromLS = (): string | null => {
    return localStorage.getItem("deviceId");
};


export const setNameAndContestIdInLS = (nameAndContestId: { name: string; contestId: number }[]) => {
    localStorage.setItem("nameAndContestId", JSON.stringify(nameAndContestId));
}
export const getNameAndContestId = () => {
    const data = localStorage.getItem("nameAndContestId");
    return data ? JSON.parse(data) : [];
};
