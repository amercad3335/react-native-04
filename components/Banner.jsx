import { Image } from "react-native";

export function Banner({name}) {
    return (
      <Image
        source={require(`../assets/img/${ name }.jpg`)}
        style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
      />
    )
  }