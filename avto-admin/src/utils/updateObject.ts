interface Obj {
  [key: string]: any;
}

const updateObject = <T extends Obj>(oldState: T, newState: Obj): T => {
  return { ...oldState, ...newState };
};

export default updateObject;
