import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Contact } from './contact.schema';
import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ContactDto } from './dto/contact.dto';
import { filterContactDto } from './dto/filter-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel('Contact')
    private readonly contactModel: Model<Contact>,
  ) {}

  async addSingleContact(data: ContactDto) {
    const newContact = await this.contactModel.create(data);
    const contactObject = await newContact.save();
    if (contactObject.id === null)
      throw new RuntimeException('Server unable to perform request');
    return contactObject.id as string;
  }

  async addMultipleContact(data: ContactDto[]) {
    let newContact, contactObject;
    data.map(async (contact) => {
      newContact = await this.contactModel.create(contact);
      contactObject = await newContact.save();
      if (contactObject.id === null)
        throw new RuntimeException('Server unable to perform request');
    });
    return { message: 'data saved successfully' };
  }

  async getSingleContact(id: string): Promise<Contact> {
    const contact = await this.contactModel.findOne({ _id: id }).exec();
    if (contact === null)
      throw new NotFoundException(
        { Error: 'NOT_FOUND', id },
        'no data exists with id',
      );
    return contact;
  }

  async getAllContact(page: number, limit: number): Promise<Contact[]> {
    if (page === null) page = 1;
    if (limit === null) limit = 10;
    const skip = (page - 1) * limit;

    const contact = await this.contactModel
      .find({})
      .skip(skip)
      .limit(limit)
      .exec();
    if (contact === null)
      throw new NotFoundException(
        { Error: 'NOT_FOUND', page, limit },
        'Data does not exists',
      );
    return contact;
  }

  async filterContact(query: Partial<filterContactDto>): Promise<Contact[]> {
    // eslint-disable-next-line prefer-const
    let { page, limit, ...contactQuery } = query;
    if (page === null) page = 1;
    if (limit === null) limit = 10;
    const skip = (page - 1) * limit;

    const contacts = await this.contactModel
      .find({})
      .where(contactQuery)
      .skip(skip)
      .limit(limit)
      .exec();

    if (contacts === null)
      throw new NotFoundException(
        { Error: 'NOT_FOUND', query },
        'no data found for the query',
      );
    return contacts;
  }

  async updateContact(id, data) {
    const contacts = await this.contactModel.findOneAndUpdate(
      this.contactModel.findOne(id),
      this.contactModel.updateOne(data),
    );
    if (contacts === null)
      throw new RuntimeException('Server unable to perform request');
    return { id: contacts._id, message: 'data have been updated' };
  }

  async deleteContact(id) {
    const contact = await this.contactModel.deleteOne({ id });
    if (contact === null)
      throw new RuntimeException('Server unable to perform request');
    return { message: 'data deleted successfully' };
  }
}
