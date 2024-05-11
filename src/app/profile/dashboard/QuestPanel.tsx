import { Checkbox, FormControlLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface Quest {
  id: string;
  title: string;
  description: string;
  xp: number;
  done: boolean;
}

interface QuestPanelProps {
  quests: Quest[];
  onQuestDoneChange: (questId: string, isDone: boolean) => void;
  onQuestDelete: (questId: string) => void;
}

const QuestPanel: React.FC<QuestPanelProps> = ({
  quests,
  onQuestDoneChange,
  onQuestDelete,
}) => {
  const handleQuestDoneChange = (
    questId: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isDone = event.target.checked;
    onQuestDoneChange(questId, isDone);
  };

  const handleQuestDelete = (questId: string) => {
    onQuestDelete(questId);
  };

  return (
    <div
      style={{
        width: '500px',
        height: '500px',
        border: 'solid 2px',
        borderStyle: 'rounded',
        borderColor: '#13c4a3',
      }}
    >
      {quests?.map((quest) => (
        <div key={quest.id}>
          <h2>{quest.title}</h2>
          <p>{quest.description}</p>
          <p>{quest.xp}</p>
          <FormControlLabel
            label={quest.done ? 'Quest Done !' : 'Quest Incomplete !'}
            control={
              <Checkbox
                checked={quest.done}
                onChange={(event) => handleQuestDoneChange(quest.id, event)}
              />
            }
          />
          <IconButton
            color="inherit"
            aria-label="delete"
            onClick={() => handleQuestDelete(quest.id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
};

export default QuestPanel;
