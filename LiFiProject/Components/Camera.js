import React, {PureComponent} from 'react'
import {RNCamera} from 'react-native-camera'

class Camera extends PureComponent {
    constructor(props) {super(props);}

    render() {
        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                captureAudio={false}
                style={{flex: 1}}
                type={RNCamera.Constants.Type.back}
                androidCameraPermissionOptions={{
                    title: 'Accès à la caméra',
                    message: 'Nous avons besoin de votre autorisation pour accéder à la camére',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Annuler',
                }} />
        );
    }
}

export default Camera