export const initializeWebSocket = (socket) => {
    return {
        type: 'INITIALIZE_SOCKET',
        payload: socket,
    };
};
