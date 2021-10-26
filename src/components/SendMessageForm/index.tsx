import React, { useState } from 'react';

import { KeyboardAvoidingView, TextInput, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';


import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('')
  const [sendingMessage, setSendingMessage] = useState(false)


  return (
    <KeyboardAvoidingView 
    behavior="position">
      <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento ?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={styles.input}
      />
      <Button
        title="Enviar mensagem"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
      />
      </View>
    </KeyboardAvoidingView>
  );
}