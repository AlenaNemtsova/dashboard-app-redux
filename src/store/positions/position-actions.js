export const ADD_POSITIONS = 'ADD_POSITIONS'; //константы можно хранить как в отдельном файле, так и прямо рядом с экшеном

export const addPositions = (positions) => ({
    type: ADD_POSITIONS,
    positions, //может быть и так: payload: positions
});