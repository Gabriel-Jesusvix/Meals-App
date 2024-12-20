import { Pressable,PressableProps } from 'react-native';
import { MaterialIcons as Icon  } from '@expo/vector-icons';
import { s } from './styles';
import type { MaterialIcons } from '@expo/vector-icons';

type FavoriteButtonProps = PressableProps & {
  icon:  keyof typeof MaterialIcons.glyphMap
  color: string
}
export function FavoriteButton({ icon, color, ...rest }: FavoriteButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => pressed && s.pressed }
      {...rest}
    >
      <Icon name={icon} size={24} color={color} />
    </Pressable>
  );
}