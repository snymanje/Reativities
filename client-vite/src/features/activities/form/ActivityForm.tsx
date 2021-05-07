import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (Activity: Activity) => void;
  submitting: boolean;
}

const ActivityForm = ({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
  submitting,
}: Props) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activity);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input
          placeholder='Title'
          value={activity.title}
          name='title'
          onChange={handleChange}
        />
        <Form.Input
          placeholder='Description'
          value={activity.description}
          name='description'
          onChange={handleChange}
        />
        <Form.Input
          placeholder='Category'
          value={activity.category}
          name='category'
          onChange={handleChange}
        />
        <Form.Input
          type='Date'
          placeholder='Date'
          value={activity.date}
          name='date'
          onChange={handleChange}
        />
        <Form.Input placeholder='City' value={activity.city} name='city' onChange={handleChange} />
        <Form.Input
          placeholder='Venue'
          value={activity.venue}
          name='venue'
          onChange={handleChange}
        />
        <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
        <Button floated='right' type='button' content='Cancel' onClick={closeForm} />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
