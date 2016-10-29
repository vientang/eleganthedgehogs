import React, {Component} from 'react';
import styles from './styles';
import { View } from 'react-native';
import { Title, Button } from 'native-base';
import Hr from 'react-native-hr';
import GamePicker from '../GamePicker/GamePicker';
import TimePicker from '../TimePicker/TimePicker';

class CreateGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newGameType: false,
			newTimeData: false,
			dataAvailable: false
		}
	}


	render() {
		return (
			<View style={styles.container}>
			 <Button 
			 	transparent
			 	onPress={ () => this.props.exitCreateGame() } 
			 	textStyle={styles.xtext} 
			 	style={styles.x}>X</Button>

			 <View style={styles.innerContainer}>
			 	<Title style={styles.title}>Game Type</Title>
			  <Hr lineColor='rgba(255, 255, 255, .5)'/>
			  <GamePicker ref="gamePickerData" onGameTypeChange= {this.props.onGameTypeChange}/>
			  <Title style={styles.title}>Start Time</Title>
			  <Hr lineColor='rgba(255, 255, 255, .5)'/>
			  <TimePicker ref="timePickerData" onTimeDataChange= {this.props.onTimeDataChange}/>
			  <Button 
			  	block
			  	success
			  	onPress={ () => {
			  		this.props.postGame();
			  		this.props.submitGame();
			  	}}
			  	style={styles.button}>Create Game!</Button>
			 </View>
			</View>
		)
	}


	componentDidMount() {
		console.log('After mounting, this.refs is:', this.refs, 'and its state is:', this.refs.gamePickerData.state);
		this.setState({newGameType: this.refs.gamePickerData.state.gameType});
	}
}

export default CreateGame;