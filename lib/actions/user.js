import User from "../models/user.model";

import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses
) => {
  try {
    await connect();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          name: first_name + " " + last_name,
          avatar: image_url,
          email: email_addresses[0].email,
        },
      },
      {
        new: true,
        upsert: true,
      }
    );

    return user;
  } catch (error) {
    console.log("Error creating or updating user: ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error deleting the user", error);
  }
};
