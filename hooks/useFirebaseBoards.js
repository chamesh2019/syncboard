'use client';

import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  onSnapshot,
  query,
  orderBy 
} from 'firebase/firestore';
import { db } from '@/libs/firebase';

const COLLECTION_NAME = 'boards';

/**
 * Custom hook for Firebase Firestore board operations with real-time updates
 */
export function useFirebaseBoards() {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Real-time listener for boards
  useEffect(() => {
    const q = query(
      collection(db, COLLECTION_NAME),
      orderBy('updatedAt', 'desc')
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const boardsData = [];
        querySnapshot.forEach((doc) => {
          boardsData.push({
            id: doc.id,
            ...doc.data()
          });
        });
        setBoards(boardsData);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Error listening to boards:', err);
        setError('Failed to fetch real-time updates');
        setLoading(false);
        
        // Fallback to regular fetch if real-time fails
        fetchBoardsOnce();
      }
    );

    return () => unsubscribe();
  }, []);

  // Fallback function for one-time fetch
  const fetchBoardsOnce = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      const boardsData = [];
      querySnapshot.forEach((doc) => {
        boardsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      // Sort in memory
      boardsData.sort((a, b) => {
        const aTime = a.updatedAt?.toDate?.() || new Date(0);
        const bTime = b.updatedAt?.toDate?.() || new Date(0);
        return bTime - aTime;
      });
      
      setBoards(boardsData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching boards:', error);
      setError('Failed to fetch boards');
      setLoading(false);
    }
  };

  // Create a new board
  const createBoard = async (boardData) => {
    try {
      const { title, content } = boardData;
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        title,
        content,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating board:', error);
      throw new Error('Failed to create board');
    }
  };

  // Get a single board by ID
  const getBoardById = async (boardId) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, boardId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching board:', error);
      throw new Error('Failed to fetch board');
    }
  };

  // Update a board
  const updateBoard = async (boardId, updateData) => {
    try {
      const { title, content } = updateData;
      const docRef = doc(db, COLLECTION_NAME, boardId);
      
      await updateDoc(docRef, {
        title,
        content,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating board:', error);
      throw new Error('Failed to update board');
    }
  };

  // Delete a board
  const deleteBoard = async (boardId) => {
    try {
      const docRef = doc(db, COLLECTION_NAME, boardId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting board:', error);
      throw new Error('Failed to delete board');
    }
  };

  return {
    boards,
    loading,
    error,
    createBoard,
    getBoardById,
    updateBoard,
    deleteBoard,
    refreshBoards: fetchBoardsOnce
  };
}

export default useFirebaseBoards;
