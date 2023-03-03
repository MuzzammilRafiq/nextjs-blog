export const ParseArrayMongoDocument = (data) =>
  data.map((doc) => {
    const temp = doc.toObject();
    temp._id = temp._id.toString();
    temp.createdAt = temp.createdAt.toString();
    temp.updatedAt = temp.updatedAt.toString();
    return temp;
  });

export const ParseSingleMongoDocument = (data) => {
  const temp = data.toObject();
  temp._id = temp._id.toString();
  temp.createdAt = temp.createdAt.toString();
  temp.updatedAt = temp.updatedAt.toString();
  return temp;
};
