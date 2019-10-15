/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button,
    View, 
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    AppRegistry,
      ScrollView,
      TextInput,
    Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; 


var StudentData = [
    {
        "id": "AVENGER: End game",
        "name": "Avenger: End game (2019)",
        "avata":
        "http://image.phimmoi.net/film/7166/poster.medium.jpg",
        "thongtin" : "Sau sự kiện Thanos làm cho một nửa vũ trụ tan biến và khiến cho biệt đội Avengers thảm bại, những siêu anh hùng sống sót phải tham gia trận chiến cuối cùng trong Avengers: Endgame."
    },
    {
        "id": "AVENGER: Infinity war",
        "name": "Avenger: Infinity war (2018)",
        "avata":
        "http://image.phimmoi.net/film/3244/poster.medium.jpg",
        "thongtin" : "Sau chuyến hành trình độc nhất vô nhị không ngừng mở rộng và phát triển vụ trũ điện ảnh Marvel, bộ phim Avengers: Cuộc Chiến Vô Cực sẽ mang đến màn ảnh trận chiến cuối cùng khốc liệt nhất mọi thời đại. Biệt đội Avengers và các đồng minh siêu anh hùng của họ phải chấp nhận hy sinh tất cả để có thể chống lại kẻ thù hùng mạnh Thanos trước tham vọng hủy diệt toàn bộ vũ trụ của hắn. "
    },
    {
      "id": "Spiderman: Far from home",
      "name": "Spiderman: Far from home (2019)",
      "avata":
      "http://image.phimmoi.net/film/6906/poster.medium.jpg",
      "thongtin" : "Nhóc nhện Tom Holland vừa hé lộ tên phần tiếp theo của loạt phim Người Nhện sẽ là Spider-Man: Far From Home, tạm hiểu là Người Nhện: Xa Nhà. Trước đó thì giám đốc Marvel Studios Kevin Feige đã tiết lộ rằng một trong những điểm đến của người nhện chính là thủ đô Luân Đôn của đảo quốc sương mù. "
  },
    {
      "id": "BLACK PANTHER",
      "name": "Black Panther (2018)",
      "avata":
      "https://znews-photo-td.zadn.vn/w1024/Uploaded/xbhunku/2018_02_17/chien_binh_bao_den_.jpg",
      "thongtin" : "Phim Báo Đen Vương quốc Wakanda, quê hương của Black Panther/ T'Challa hiện ra qua lời kể của một nhân chứng sống sót trở về. Đây là quốc gia khá khép kín và sở hữu lượng Vibranium lớn nhất trên thế giới. Black Panther - người cầm quyền của Wakanda sở hữu bộ áo giáp chống đạn và móng vuốt sắc nhọn, anh được miêu tả là “người tốt với trái tim nhân hậu”. "
  },
    {
        "id": "Guardians of the Galaxy ",
        "name": "Guardians of the Galaxy vol.2 (2017)",
        "avata":
        "http://image.phimmoi.net/film/4415/poster.medium.jpg",
        "thongtin" : "Guardians Of The Galaxy - Vệ binh dải ngân hà Phần 2 tiếp tục câu chuyện về bộ tứ huyền thoại của thiên hà. Lần này, cả nhóm sẽ bắt đầu cuộc phiêu lưu mới nhằm tìm ra bí ẩn thân thế của Star Lord – Peter Quill và viên Power Infinity Gem sở hữu sức mạnh vô song. Nhân vật anti-hero Yondu sẽ có vai trò quan trọng hơn nữa trong phần này, bên cạnh đó cô em gái Nebula của Gamora cũng sẽ trở lại."
    },
    {
        "id": "Guardians of the Galaxy",
        "name": "Guardians of the Galaxy vol.1 (2014)",
        "avata":
        "http://image.phimmoi.net/film/1017/poster.medium.jpg",
        "thongtin" : "Phim nói về một phi công phản lực được bị mắc kẹt trong không gian, và anh phải đoàn kết một nhóm người ngoài hành tinh để tạo thành một đội quân đủ khả năng đánh bại các mối đe dọa từ vũ trụ. Phim có sự tham gia diễn xuất của Karen Gillan, Bradley Cooper, Zoe Saldana… và sự chỉ đạo của đạo diễn James Gunn."
    },
    {
      "id": "Captain America 3: Civil War",
      "name": "Captain America 3: Civil War (2018)",
      "avata":
      "http://image.phimmoi.net/film/3086/poster.medium.jpg",
      "thongtin" : "Captain America: Civil War là câu chuyện theo sau sự kiện Avengers: Age Of Ultron, các liên minh chính phủ trên toàn thế giới thông qua một hiệp ước được thiết lập để điều chỉnh hoạt động của tất cả siêu anh hùng. Điều này gây ra sự phân cực trong nội bộ nhóm Avengers, tạo nên hai phe gồm Iron Man và Captain America, gây ra một trận chiến sử thi giữa những người đồng đội."
  },
    {
        "id": "THOR 3: Ragnarok",
        "name": "Thor 3: Ragnarok (2017)",
        "avata":
        "http://image.phimmoi.net/film/3243/poster.medium.jpg",
        "thongtin" : "Ragnarok ám chỉ “tận cùng của vũ trụ”, đồng nghĩa với trận chiến sống còn của chín cõi (Nine Realms). Sau khi Loki Loki soán ngôi cha Odin, vị thần tinh quái này tiếp tục mở đường nhiễu loạn tiến từ cầu Bifrost vào trong Asgard.\nỞ bên kia vũ trụ, Thor (Chris Hemsworth) phải bước vào một cuộc chiến đầy khốc liệt với đối thủ mà anh sẽ gặp là một đồng đội cũ đến từ biệt đội Avenger – Hulk. Cuộc tìm kiếm sự sống còn của Thor khiến anh phải chạy đua với thời gian để ngăn chặn Hela (Cate Blanchett) tiêu diệt cả thế giới anh đang sống cùng nền văn minh Asgard."
    },
    {
        "id": "SIÊU ĐẠI CHIẾN THÁI BÌNH DƯƠNG 2: CUỘC NỔI DẬY",
        "name": "Pacific Rim 2: Uprising (2018)",
        "avata":
        "http://image.phimmoi.net/film/1/poster.medium.jpg",
        "thongtin" : "Xem Siêu Đại Chiến Thái Bình Dương 2: Cuộc Nổi Dậy Đã 10 năm kể từ trận chiến ở Breach nhưng các trận chiến trên đại dương vẫn không ngừng. Được chứng minh bằng chiến thắng tại Breach, chương tình Jaeger đã phát triển thành lực lượng phòng thủ toàn cầu mạnh nhất trong lịch sử nhân loại. PPDC hiện đang kêu gọi những người lính giỏi nhất và thông minh nhất để vươn lên trở thành thế hệ anh hùng kế tiếp. Khi mối đe dọa của Kaiju trở lại, chúng tôi sẽ sẵn sàng."
    },
    
    {
        "id": "The Avengers",
        "name": "The Avengers (2012)",
        "avata":
        "http://image.phimmoi.net/film/44/poster.medium.jpg",
        "thongtin" : "Marvel’s The Avengers là bộ phim giả tưởng kể về một nhóm siêu anh hùng với những khả năng đặc biệt, họ bao gồm: Người Sắt, Thor, Captain America, và Người Khổng Lồ được gọi chung với cái tên SHIELD. Mục đích của SHIELD là nhằm bảo vệ Trái đất khỏi âm mưu hủy hoại của những thế lực xấu từ ngoài địa cầu mà kẻ cầm đầu là Loki. Marvel’s The Avengers Là một trong những phim được mong đợi nhất hè 2012, phim quy tụ dàn diễn viên đẹp với những cảnh quay sống động đã mang về cho nhà sản xuất hơn 1 tỷ USD. Nếu bạn đã từng là Fan của những siêu phẩm như: Spider-Man, Batman thì Marvel’s The Avengers quả là một bộ phim khó có thể bỏ qua."
    },
     {
        "id": "ĐẠI CHIẾN HÀNH TINH KHỈ",
        "name": "War for the Planet of the Apes (2017)",
        "avata":
        "http://image.phimmoi.net/film/4644/poster.medium.jpg",
        "thongtin" : "War for Planet of the Apes, phần phim thứ 3 và cũng là cuối cùng của trilogy Planet of the Apes. Tiếp nối phần trước, sau khi quân đội biết sự tồn tại của xã hội loài khỉ dưới sự chỉ huy của Caesar, họ quyết định đến chiến đấu chống lại Caesar, nhóm lính được dẫn đầu bởi một vị tướng tàn bạo. Về phần vị vua khỉ của chúng ta, sau những mất mát của mình, anh ta dần trở nên đen tối hơn, có những suy nghĩ độc đoán hơn về con người và cách thống lĩnh của mình. Số phận của hai giống loài này phụ thuộc vào cuộc chiến cuối cùng này! "
    },
];
module.export = StudentData;
class Login extends React.Component {

    render() {
        return (

            <ScrollView style={{padding: 20}}>
                <Text 
                    style={{fontSize: 20,   marginVertical: 15, fontWeight:'bold',textAlign: 'center', color:'#ff0000'}}>
                    Welcome
                </Text>
                <TextInput placeholder='Acount'  id='Acount' keyboardType="email-address" style={{backgroundColor:'rgb(179, 255, 204)',
    borderRadius: 25,fontWeight:'bold'}}/>
                <TextInput placeholder='Password'  id='Password'  secureTextEntry={true} style={{backgroundColor:'rgb(179, 255, 204)',
    borderRadius: 25, marginTop:10,fontWeight:'bold'}}/>

                <View style={{margin:7,}} />
                <Button 
                       onPress={()=>
          this.props.navigation.navigate('List')
          }
        
                        title="Login"
                    />
  

                </ScrollView>

            )
    }
}
class FlatListStudent extends React.Component {
    static navigationOptions =
    {
        header: null
    };
    render(){
        return(
           <View style={{flex:1, marginTop:3,marginLeft: 8,
        marginRight: 3,}}>
 <FlatList
 data={StudentData}
 renderItem={({item, index})=>{
 return(
  <TouchableHighlight onPress={() =>{this.props.navigation.navigate('Details',{ ten: item.name, anh: item.avata,id:item.id,thongtin:item.thongtin } ) }}>

  <View style={{flex:1, flexDirection:'row', backgroundColor: index % 2 == 0 ? '#FFFFCC': 'white', height: 90,
            padding: 5,}}>
      <Image 
      source={{uri: item.avata}}
      style={{width: 70, height:70,margin:5}}
      />
    <View style={{flex:1 }}>
      <Text style={{fontSize: 18,
        fontWeight: 'bold',
        color: 'red'}}> {item.id} </Text>
      <Text style={{color:'black', fontSize:17}}> {item.name}  </Text>
     </View>
  </View>

  </TouchableHighlight>
 );
 }}
 />
 </View>
         

        );
    }
}



class DetailsScreen extends React.Component {
  render() {

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}} >
      <View>
        <Text  style={{fontSize:20,fontWeight:'bold',margin:10, alignItems: 'center', justifyContent: 'center',color:'black'}}>Thông Tin</Text>
        </View>
        
              <View>
                    <Image
                        style={{ width: 250, height: 250}}
                        source={{ uri: this.props.navigation.state.params.anh }}
                    />
                
                  
                    </View>
                    <Text   style={{ fontSize: 20, color: '#000', marginTop: 10,fontWeight:'bold',color:'#ff0000' }}>  {this.props.navigation.state.params.id}</Text>
                   <Text
                        style={{ fontSize: 20, color: '#000' }}
                    >
                        {this.props.navigation.state.params.ten}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#000'}}>Mô Tả : {this.props.navigation.state.params.thongtin}</Text>

        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()
          }
        />
      </View>

    );
  }
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    Details: {
      screen: DetailsScreen,
    },
    List:{
      screen:FlatListStudent,
    },
  },
  {

    headerMode:'none',  }
);
export default class App extends React.Component {
  render() {  
    return <RootStack />;
  }
}
