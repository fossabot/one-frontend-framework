import 'reflect-metadata';
import { AbstractStorageService } from './abstractStorageService';

/**
 * Abstract language service to implement
 */
export abstract class AbstractLanguageService<T> {
    public storeService!: AbstractStorageService;
    public text!: T;

    /**
     * Init storage service
     * @param storeService 
     */
    public abstract initStore<T extends AbstractStorageService>(storeService: T): void;

    /**
     * Set language to store 
     * @param value 
     */
    public abstract setLanguage(value: string): void;

    /**
     * Get language text from json
     * @param value 
     */
    public abstract getLanguageText(value: string): void;
}