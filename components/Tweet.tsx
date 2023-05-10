import React, { ReactNode } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TweetType } from "../interfaces";
import { Entypo } from "@expo/vector-icons";
import IconButton from "./IconButton";

type ITweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: ITweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.avatar} />
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet?.user.name}</Text>
          <Text style={styles.username}>{tweet?.user.username} ・3h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text style={styles.body}>{tweet.content}</Text>
        {tweet.image && <Image style={styles.imageTweet} src={tweet.image} />}
        <View style={styles.footer}>
          <IconButton icon="comment" textIcon={tweet?.numberOfComments} />
          <IconButton icon="retweet" textIcon={tweet?.numberOfRetweets} />
          <IconButton icon="heart" textIcon={tweet?.numberOfLikes} />
          <IconButton icon="chart" textIcon={tweet?.numberOfRetweets} />
          <IconButton icon="share-apple" textIcon={tweet?.impressions || 0} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },
  mainContainer: {
    flex: 1,
    marginLeft: 10,
  },
  avatar: { width: 50, height: 50, borderRadius: 50 },
  name: { fontWeight: "600" },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  body: { lineHeight: 20, marginTop: 5 },
  imageTweet: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 20,
    borderRadius: 15,
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
export default Tweet;
