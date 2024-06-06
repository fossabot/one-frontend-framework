import 'reflect-metadata';
import { AbstractStorageService } from './abstractStorageService';
import { AnyType } from '../types/abstractType';

/**
 * Abstract language service to implement
 */
export abstract class AbstractLanguageService<T extends AbstractStorageService> {
    public storeService!: T;
    public text!: AnyType;

    /**
     * Init storage service
     * @param storeService 
     */
    public abstract initStore(storeService: T): void;

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