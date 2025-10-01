import React, { useState, useEffect } from 'react';
import { Statistic } from '../../../types';
import { statisticsData } from '../../../data/siteData';
import styles from './StatisticsEditor.module.css';

const StatisticsEditor: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistic[]>(statisticsData);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newStatistic, setNewStatistic] = useState<Statistic>({ 
    number: '', 
    label: '', 
    color: 'var(--accent-red)' 
  });

  useEffect(() => {
    const savedStatistics = localStorage.getItem('adminStatistics');
    if (savedStatistics) {
      setStatistics(JSON.parse(savedStatistics));
    }
  }, []);

  const saveToStorage = (stats: Statistic[]) => {
    localStorage.setItem('adminStatistics', JSON.stringify(stats));
  };

  const handleSave = () => {
    saveToStorage(statistics);
    alert('Statistics saved successfully!');
  };

  const handleAddStatistic = () => {
    if (!newStatistic.number.trim() || !newStatistic.label.trim()) {
      alert('Please fill in all fields');
      return;
    }

    const updated = [...statistics, { ...newStatistic }];
    setStatistics(updated);
    saveToStorage(updated);
    setNewStatistic({ number: '', label: '', color: 'var(--accent-red)' });
  };

  const handleEditStatistic = (index: number, statistic: Statistic) => {
    const updated = [...statistics];
    updated[index] = statistic;
    setStatistics(updated);
    saveToStorage(updated);
    setEditingIndex(null);
  };

  const handleDeleteStatistic = (index: number) => {
    if (window.confirm('Are you sure you want to delete this statistic?')) {
      const updated = statistics.filter((_, i) => i !== index);
      setStatistics(updated);
      saveToStorage(updated);
    }
  };

  const colorOptions = [
    { value: 'var(--accent-red)', label: 'Red', color: '#D32F2F' },
    { value: 'var(--accent-orange)', label: 'Orange', color: '#FF9800' },
    { value: 'var(--primary-blue)', label: 'Blue', color: '#3B4A9C' },
    { value: '#16a34a', label: 'Green', color: '#16a34a' },
    { value: '#7c3aed', label: 'Purple', color: '#7c3aed' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Statistics Editor</h2>
        <p>Manage the statistics displayed on your website</p>
      </div>

      {/* Add New Statistic Form */}
      <div className={styles.addForm}>
        <h3>Add New Statistic</h3>
        <div className={styles.formRow}>
          <div className={styles.inputGroup}>
            <label>Number/Value</label>
            <input
              type="text"
              value={newStatistic.number}
              onChange={(e) => setNewStatistic({ ...newStatistic, number: e.target.value })}
              placeholder="e.g., 1,200+ or 95%"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Label</label>
            <input
              type="text"
              value={newStatistic.label}
              onChange={(e) => setNewStatistic({ ...newStatistic, label: e.target.value })}
              placeholder="e.g., Students, Success Rate"
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Color</label>
            <select
              value={newStatistic.color}
              onChange={(e) => setNewStatistic({ ...newStatistic, color: e.target.value })}
            >
              {colorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button className={styles.addButton} onClick={handleAddStatistic}>
            Add Statistic
          </button>
        </div>
      </div>

      {/* Existing Statistics */}
      <div className={styles.statisticsList}>
        <h3>Current Statistics</h3>
        {statistics.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📊</div>
            <p>No statistics found. Add your first statistic above.</p>
          </div>
        ) : (
          <div className={styles.statisticsGrid}>
            {statistics.map((statistic, index) => (
              <div key={index} className={styles.statisticCard}>
                {editingIndex === index ? (
                  <EditForm
                    statistic={statistic}
                    colorOptions={colorOptions}
                    onSave={(updatedStatistic) => handleEditStatistic(index, updatedStatistic)}
                    onCancel={() => setEditingIndex(null)}
                  />
                ) : (
                  <StatisticDisplay
                    statistic={statistic}
                    colorOptions={colorOptions}
                    onEdit={() => setEditingIndex(index)}
                    onDelete={() => handleDeleteStatistic(index)}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button className={styles.saveButton} onClick={handleSave}>
          Save All Changes
        </button>
      </div>
    </div>
  );
};

interface StatisticDisplayProps {
  statistic: Statistic;
  colorOptions: { value: string; label: string; color: string; }[];
  onEdit: () => void;
  onDelete: () => void;
}

const StatisticDisplay: React.FC<StatisticDisplayProps> = ({ 
  statistic, 
  colorOptions, 
  onEdit, 
  onDelete 
}) => {
  const getColorName = (colorValue: string) => {
    const option = colorOptions.find(opt => opt.value === colorValue);
    return option ? option.label : 'Custom';
  };

  const getColorHex = (colorValue: string) => {
    const option = colorOptions.find(opt => opt.value === colorValue);
    return option ? option.color : colorValue;
  };

  return (
    <div className={styles.statisticDisplay}>
      <div className={styles.statisticPreview}>
        <div 
          className={styles.statisticNumber}
          style={{ color: getColorHex(statistic.color) }}
        >
          {statistic.number}
        </div>
        <div className={styles.statisticLabel}>
          {statistic.label}
        </div>
        <div className={styles.colorInfo}>
          <span 
            className={styles.colorIndicator}
            style={{ backgroundColor: getColorHex(statistic.color) }}
          ></span>
          {getColorName(statistic.color)}
        </div>
      </div>
      <div className={styles.cardActions}>
        <button className={styles.editBtn} onClick={onEdit}>Edit</button>
        <button className={styles.deleteBtn} onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

interface EditFormProps {
  statistic: Statistic;
  colorOptions: { value: string; label: string; color: string; }[];
  onSave: (statistic: Statistic) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ statistic, colorOptions, onSave, onCancel }) => {
  const [editStatistic, setEditStatistic] = useState<Statistic>(statistic);

  return (
    <div className={styles.editForm}>
      <div className={styles.editFormContent}>
        <div className={styles.inputGroup}>
          <label>Number/Value</label>
          <input
            type="text"
            value={editStatistic.number}
            onChange={(e) => setEditStatistic({ ...editStatistic, number: e.target.value })}
            placeholder="e.g., 1,200+ or 95%"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Label</label>
          <input
            type="text"
            value={editStatistic.label}
            onChange={(e) => setEditStatistic({ ...editStatistic, label: e.target.value })}
            placeholder="e.g., Students, Success Rate"
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Color</label>
          <select
            value={editStatistic.color}
            onChange={(e) => setEditStatistic({ ...editStatistic, color: e.target.value })}
          >
            {colorOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.editActions}>
          <button className={styles.saveBtn} onClick={() => onSave(editStatistic)}>Save</button>
          <button className={styles.cancelBtn} onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default StatisticsEditor;