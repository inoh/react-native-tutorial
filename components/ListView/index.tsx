import React from 'react';

import {
  FlatList,
  SectionList,
  Text,
  View,
} from 'react-native';

const ListData = [
  {title: 'inoue', data: ['man']},
  {title: 'hiroyuki', data: ['man']},
  {title: 'yamada', data: ['woman']},
  {title: 'hanako', data: ['woman']},
];

const ListView = () => (
  <View>
    <FlatList
      data={ListData}
      renderItem={({item}) => <Text>{item.title}</Text>}
    />

    <SectionList
      sections={ListData}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
      keyExtractor={({ item, index }) => index}
    />
  </View>
);

export default ListView;
