import { Pressable,PressableProps } from 'react-native';
import { Ionicons as Icon  } from '@expo/vector-icons';
import { s } from './styles';
import type { Ionicons } from '@expo/vector-icons';

type FavoriteButtonProps = PressableProps & {
  icon:  keyof typeof Ionicons.glyphMap;
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