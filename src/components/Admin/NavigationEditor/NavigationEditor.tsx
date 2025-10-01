import React, { useState, useEffect } from 'react';
import { NavigationItem } from '../../../types';
import { navigationData, mainNavigationData } from '../../../data/siteData';
import styles from './NavigationEditor.module.css';

const NavigationEditor: React.FC = () => {
  const [navigation, setNavigation] = useState<NavigationItem[]>(navigationData);
  const [mainNavigation, setMainNavigation] = useState<NavigationItem[]>(mainNavigationData);
  const [activeTab, setActiveTab] = useState<'main' | 'secondary'>('main');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [newItem, setNewItem] = useState<NavigationItem>({ label: '', href: '', color: 'blue' });

  useEffect(() => {
    // Load from localStorage if available
    const savedNavigation = localStorage.getItem('adminNavigation');
    const savedMainNavigation = localStorage.getItem('adminMainNavigation');
    
    if (savedNavigation) {
      setNavigation(JSON.parse(savedNavigation));
    }
    if (savedMainNavigation) {
      setMainNavigation(JSON.parse(savedMainNavigation));
    }
  }, []);

  const saveToStorage = (nav: NavigationItem[], mainNav: NavigationItem[]) => {
    localStorage.setItem('adminNavigation', JSON.stringify(nav));
    localStorage.setItem('adminMainNavigation', JSON.stringify(mainNav));
  };

  const handleSave = () => {
    saveToStorage(navigation, mainNavigation);
    alert('Navigation settings saved successfully!');
  };

  const handleAddItem = () => {
    if (!newItem.label.trim() || !newItem.href.trim()) {
      alert('Please fill in all fields');
      return;
    }

    if (activeTab === 'main') {
      const updated = [...mainNavigation, { ...newItem }];
      setMainNavigation(updated);
      saveToStorage(navigation, updated);
    } else {
      const updated = [...navigation, { ...newItem }];
      setNavigation(updated);
      saveToStorage(updated, mainNavigation);
    }
    
    setNewItem({ label: '', href: '', color: 'blue' });
  };

  const handleEditItem = (index: number, item: NavigationItem) => {
    if (activeTab === 'main') {
      const updated = [...mainNavigation];
      updated[index] = item;
      setMainNavigation(updated);
      saveToStorage(navigation, updated);
    } else {
      const updated = [...navigation];
      updated[index] = item;
      setNavigation(updated);
      saveToStorage(updated, mainNavigation);
    }
    setEditingIndex(null);
  };

  const handleDeleteItem = (index: number) => {
    if (window.confirm('Are you sure you want to delete this navigation item?')) {
      if (activeTab === 'main') {
        const updated = mainNavigation.filter((_, i) => i !== index);
        setMainNavigation(updated);
        saveToStorage(navigation, updated);
      } else {
        const updated = navigation.filter((_, i) => i !== index);
        setNavigation(updated);
        saveToStorage(updated, mainNavigation);
      }
    }
  };

  const currentItems = activeTab === 'main' ? mainNavigation : navigation;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Navigation Editor</h2>
        <p>Manage your website navigation menu items</p>
      </div>

      <div className={styles.tabContainer}>
        <button
          className={`${styles.tab} ${activeTab === 'main' ? styles.active : ''}`}
          onClick={() => setActiveTab('main')}
        >
          Main Navigation
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'secondary' ? styles.active : ''}`}
          onClick={() => setActiveTab('secondary')}
        >
          Hero Navigation
        </button>
      </div>

      <div className={styles.content}>
        {/* Add New Item Form */}
        <div className={styles.addForm}>
          <h3>Add New Item</h3>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label>Label</label>
              <input
                type="text"
                value={newItem.label}
                onChange={(e) => setNewItem({ ...newItem, label: e.target.value })}
                placeholder="e.g., About Us"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Link (href)</label>
              <input
                type="text"
                value={newItem.href}
                onChange={(e) => setNewItem({ ...newItem, href: e.target.value })}
                placeholder="e.g., /about or #section"
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Color</label>
              <select
                value={newItem.color}
                onChange={(e) => setNewItem({ ...newItem, color: e.target.value as 'red' | 'orange' | 'blue' })}
              >
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
              </select>
            </div>
            <button className={styles.addButton} onClick={handleAddItem}>
              Add Item
            </button>
          </div>
        </div>

        {/* Existing Items */}
        <div className={styles.itemsList}>
          <h3>Current Items</h3>
          {currentItems.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No navigation items found. Add your first item above.</p>
            </div>
          ) : (
            <div className={styles.items}>
              {currentItems.map((item, index) => (
                <div key={index} className={styles.item}>
                  {editingIndex === index ? (
                    <EditForm
                      item={item}
                      onSave={(updatedItem) => handleEditItem(index, updatedItem)}
                      onCancel={() => setEditingIndex(null)}
                    />
                  ) : (
                    <ItemDisplay
                      item={item}
                      onEdit={() => setEditingIndex(index)}
                      onDelete={() => handleDeleteItem(index)}
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
    </div>
  );
};

interface ItemDisplayProps {
  item: NavigationItem;
  onEdit: () => void;
  onDelete: () => void;
}

const ItemDisplay: React.FC<ItemDisplayProps> = ({ item, onEdit, onDelete }) => (
  <div className={styles.itemDisplay}>
    <div className={styles.itemInfo}>
      <span className={`${styles.colorBadge} ${styles[item.color]}`}>{item.color}</span>
      <strong>{item.label}</strong>
      <span className={styles.href}>{item.href}</span>
    </div>
    <div className={styles.itemActions}>
      <button className={styles.editBtn} onClick={onEdit}>Edit</button>
      <button className={styles.deleteBtn} onClick={onDelete}>Delete</button>
    </div>
  </div>
);

interface EditFormProps {
  item: NavigationItem;
  onSave: (item: NavigationItem) => void;
  onCancel: () => void;
}

const EditForm: React.FC<EditFormProps> = ({ item, onSave, onCancel }) => {
  const [editItem, setEditItem] = useState<NavigationItem>(item);

  return (
    <div className={styles.editForm}>
      <div className={styles.formRow}>
        <input
          type="text"
          value={editItem.label}
          onChange={(e) => setEditItem({ ...editItem, label: e.target.value })}
          placeholder="Label"
        />
        <input
          type="text"
          value={editItem.href}
          onChange={(e) => setEditItem({ ...editItem, href: e.target.value })}
          placeholder="Link"
        />
        <select
          value={editItem.color}
          onChange={(e) => setEditItem({ ...editItem, color: e.target.value as 'red' | 'orange' | 'blue' })}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
        </select>
        <button className={styles.saveBtn} onClick={() => onSave(editItem)}>Save</button>
        <button className={styles.cancelBtn} onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default NavigationEditor;