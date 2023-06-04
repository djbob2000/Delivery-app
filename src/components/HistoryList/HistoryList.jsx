import { HistoryItem } from "../HistoryItem/HistoryItem";
import { List, ListItem } from "@mui/material";

export const HistoryList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <ListItem key={item.id}>
          <HistoryItem item={item} />
        </ListItem>
      ))}
    </List>
  );
};
