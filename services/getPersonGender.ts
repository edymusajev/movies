export const getPersonGender = (number: number) => {
  if (number === 0) {
    return 'Not specified';
  } else if (number === 1) {
    return 'Female';
  } else if (number === 2) {
    return 'Male';
  } else {
    return 'Non-binary';
  }
};
