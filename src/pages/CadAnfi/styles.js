import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const ContentImage = styled.View`
  background: #c6d3d5;
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 200px;
  height: 160px;
`;

export const Content = styled.View`
  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  color: #759542;
  font-weight: bold;
  font-size: 25px;
`;

export const TextInput = styled.TextInput`
  height: 40px;
  width: 320px;
  border-radius: 8px;
  margin-top: 50px;
  padding: 10px;
  border-width: 1px;
  border-color: #d6d6d6;
`;

export const ButtonNext = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background: #ffc249;

  margin-top: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonNextText = styled.Text`
  font-size: 14px;
  color: #759542;
  font-weight: bold;
`;

export const Detail = styled.View`
  width: 100%;
  height: 20px;
  background: #fff;
  margin-top: -15px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const ButtonPhoto = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 100px;
  margin-top: 20px;
`;

export const TextSobre = styled.TextInput`
  width: 320px;
  height: 80px;
  border-radius: 8px;
  margin-top: 50px;
  padding: 10px;
  border-width: 1px;
  border-color: #d6d6d6;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;
export const MenuItem = styled.View`
  width: 320px;
  
  margin-top: 40px; 
  flex-direction: row;
  justify-content: space-around;
`;
export const Text = styled.Text`
margin-top: 50px;
`;
export const TextItem = styled.Text`
  font-size: 17px;
  margin-left: 10px; 
  flex-start
`;
export const MenuItem2 = styled.View`
width: 320px;
  
margin-top: 40px; 

flex-direction: row;
justify-content: center;

`;
