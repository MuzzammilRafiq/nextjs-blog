export const CREATE = async (req, res, next, props) => {
  const { Collection, Label, data } = props;
  try {
    const response = await Collection.create(data);
    res.status(200).json({
      response: true,
      message: `${Label} Created Successfully`,
      data: response,
    });
    return response;
  } catch (e) {
    if (e.code == 11000) {
      console.log(e);
      res
        .status(409)
        .json({ response: false, message: `${Label} already exists` });
    } else {
      res.status(500).json({ response: false, message: `${e}` });
    }
  }
};
export const FETCH = async (req, res, next, props) => {
  const { Collection, Label } = props;
  try {
    const response = await Collection.find().sort({ createdAt: -1 });
    if (response) {
      res
        .status(200)
        .json({ response: true, message: `List of ${Label}`, data: response });
    } else {
      res.json(404).json({ response: false, message: `No ${Label} found` });
    }
    return response;
  } catch (e) {
    res.status(500).json({ response: false, message: `${e}` });
  }
};
export const FETCH_BY_QUERY_ATTRIBUTES = async (req, res, next, props) => {
  const { Collection, Attribute, AttributeName, Label } = props;

  try {
    console.log(req.query);
    const QueryObj = req.query;
    console.log(QueryObj);
    const response = await Collection.find({ ...QueryObj });
    if (response.length)
      res
        .status(200)
        .json({ response: true, data: response, message: `${Label} data ` });
    else
      res.status(404).json({
        response: false,
        data: response,
        message: `${Label} not found `,
      });

    return response;
  } catch (e) {
    res.status(500).json({ response: false, message: `${e} error caused` });
  }
};
export const FETCH_BY_ATTRIBUTE = async (req, res, next, props) => {
  const { Collection, Attribute, Label, AttributeName } = props;
  try {
    const response = await Collection.find({ [AttributeName]: Attribute });
    if (response.length)
      res.status(200).json({
        response: true,
        message: `Requested ${Label}`,
        data: response,
      });
    else
      res.status(404).json({ response: false, message: `${Label} not found` });

    return response;
  } catch (e) {
    res.status(500).json({ response: false, message: `${e}` });
  }
};
export const UPDATE_BY_ATTRIBUTE = async (req, res, next, props) => {
  const { Collection, Attribute, Label, data, AttributeName } = props;
  try {
    const response = await Collection.findOneAndUpdate(
      { [AttributeName]: Attribute },
      data
    );

    if (response)
      res.status(200).json({ response: true, message: `Updated Succesfully` });
    else
      res.status(404).json({ response: false, message: `${Label} not found` });

    return response;
  } catch (e) {
    if (e.code == 11000)
      res
        .status(409)
        .json({ response: false, message: `${Label} aready exists` });
    else res.status(500).json({ response: false, message: `${e}` });
  }
};
export const DELETE_BY_ATTRIBUTE = async (req, res, next, props) => {
  const { Collection, Attribute, Label, AttributeName } = props;
  try {
    const response = await Collection.findOneAndDelete({
      [AttributeName]: Attribute,
    });
    if (response)
      res.status(200).json({ response: true, message: `Deleted Succesfully` });
    else
      res.status(404).json({ response: false, message: `${Label} not found` });

    return response;
  } catch (e) {
    res.status(500).json({ response: false, message: `${e}` });
  }
};
