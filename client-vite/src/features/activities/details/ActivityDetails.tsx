import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import Loading from "../../../app/components/Loading";
import { useStore } from "../../../app/stores/store";

const ActivityDetails = () => {
  const { activityStore } = useStore();
  const { selectedActivity: activity, openForm, cancelSelectedActivity } = activityStore;

  if (!activity) return <Loading content={""} />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button basic color='blue' content='Edit' onClick={() => openForm(activity.id)} />
          <Button basic color='grey' content='Cancel' onClick={cancelSelectedActivity} />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
