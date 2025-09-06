import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  query,
  orderBy 
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'boards';

/**
 * Firebase Firestore service for board operations
 */
export class FirebaseBoardService {
  
  /**
   * Create a new board
   * @param {Object} boardData - Board data containing title and content
   * @returns {Promise<string>} - Document ID of created board
   */
  static async createBoard(boardData) {
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
  }

  /**
   * Get all boards
   * @returns {Promise<Array>} - Array of board objects with IDs
   */
  static async getAllBoards() {
    try {
      // First try without ordering to avoid index issues on empty collection
      const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
      const boards = [];
      
      querySnapshot.forEach((doc) => {
        boards.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      // Sort in memory if we have data
      if (boards.length > 0) {
        boards.sort((a, b) => {
          const aTime = a.updatedAt?.toDate?.() || a.updatedAt || new Date(0);
          const bTime = b.updatedAt?.toDate?.() || b.updatedAt || new Date(0);
          return bTime - aTime; // Descending order (newest first)
        });
      }
      
      return boards;
    } catch (error) {
      console.error('Error fetching boards:', error);
      throw new Error('Failed to fetch boards');
    }
  }

  /**
   * Get a single board by ID
   * @param {string} boardId - Board document ID
   * @returns {Promise<Object|null>} - Board object or null if not found
   */
  static async getBoardById(boardId) {
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
  }

  /**
   * Update a board
   * @param {string} boardId - Board document ID
   * @param {Object} updateData - Data to update
   * @returns {Promise<void>}
   */
  static async updateBoard(boardId, updateData) {
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
  }

  /**
   * Delete a board
   * @param {string} boardId - Board document ID
   * @returns {Promise<void>}
   */
  static async deleteBoard(boardId) {
    try {
      const docRef = doc(db, COLLECTION_NAME, boardId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting board:', error);
      throw new Error('Failed to delete board');
    }
  }
}

export default FirebaseBoardService;
