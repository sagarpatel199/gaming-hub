import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card width="275px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
