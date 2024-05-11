'use client';

import ButtonAppBar from '@/app/ui/navbar/ButtonAppBar';
import QuestPanel from './QuestPanel';
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { useState } from 'react';

interface Quest {
  id: string;
  title: string;
  description: string;
  xp: number;
  done: boolean;
}

interface QuestFormData {
  title: string;
  description: string;
  xp: number;
}

export default function Dashboard() {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [open, setOpen] = useState(false);
  const [questFormData, setQuestFormData] = useState<QuestFormData>({
    title: '',
    description: '',
    xp: 0,
  });

  function handleFormSubmit() {
    const newQuest: Quest = {
      id: crypto.randomUUID(),
      title: questFormData.title,
      description: questFormData.description,
      xp: questFormData.xp,
      done: false,
    };
    setQuests((prevQuests) => [...prevQuests, newQuest]);
    setOpen(false);
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setQuestFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function addQuest(): void {
    setOpen(true);
  }

  console.log('quests array: ', quests);

  function handleQuestDoneChange(questId: string, isDone: boolean): void {
    setQuests((prevQuests) =>
      prevQuests.map((quest) =>
        quest.id === questId ? { ...quest, done: isDone } : quest
      )
    );
  }

  function handleQuestDelete(questId: string): void {
    setQuests((prevQuests) =>
      prevQuests.filter((quest) => quest.id !== questId)
    );
  }

  return (
    <>
      <ButtonAppBar />
      <h2>Here's your dashboard</h2>
      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineRoundedIcon />}
        onClick={addQuest}
      >
        Add Quest
      </Button>
      <QuestPanel
        quests={quests}
        onQuestDoneChange={handleQuestDoneChange}
        onQuestDelete={handleQuestDelete}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={questFormData.title}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={questFormData.description}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="XP"
            name="xp"
            value={questFormData.xp}
            onChange={handleInputChange}
            type="number"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleFormSubmit}>Add Quest</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
