import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard';

interface ProfileData {
  profileId: string;
  name: string;
  pincode: string;
  imageUrl: string;
  details: string;
}

interface ProfileCardListProps {
  data: ProfileData[];
  onButton1Press: (item: ProfileData) => void;
  onButton2Press: (item: ProfileData) => void;
  button1Text: string;
  button2Text: string;
}

const ProfileCardList: React.FC<ProfileCardListProps> = ({
  data,
  onButton1Press,
  onButton2Press,
  button1Text,
  button2Text,
}) => {
  const renderItem = ({ item }: { item: ProfileData }) => (
    <ProfileCard
      profileId={item.profileId}
      name={item.name}
      pincode={item.pincode}
      imageUrl={item.imageUrl}
      details={item.details}
      onButton1Press={() => onButton1Press(item)}
      onButton2Press={() => onButton2Press(item)}
      button1Text={button1Text}
      button2Text={button2Text}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default ProfileCardList;