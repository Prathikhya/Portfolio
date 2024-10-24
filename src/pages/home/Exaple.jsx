// src/App.js

import React, { useState } from 'react';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Define a motion version of ListItem
const MotionListItem = motion(ListItem);

const Exaple = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(prevItems => [...prevItems, { id: Date.now(), text: `Item ${prevItems.length + 1}` }]);
  };

  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Animated List with Material-UI and Framer Motion
      </Typography>
      <Button variant="contained" color="primary" onClick={addItem}>
        Add Item
      </Button>
      <List>
        <AnimatePresence>
          {items.map(item => (
            <MotionListItem
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => removeItem(item.id)} // Remove on click
            >
              <ListItemText primary={item.text} />
            </MotionListItem>
          ))}
        </AnimatePresence>
      </List>
    </div>
  );
};

export default Exaple;
