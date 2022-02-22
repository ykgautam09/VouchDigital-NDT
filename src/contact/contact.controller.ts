import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';
import { Contact } from './contact.schema';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('add')
  async addSingleContact(@Body() data: ContactDto): Promise<string> {
    return await this.contactService.addSingleContact(data);
  }

  @Post('add-multiple')
  async addMultipleContact(
    @Body() data: ContactDto[],
  ): Promise<{ message: string }> {
    return await this.contactService.addMultipleContact(data);
  }

  @Get('all')
  async getAllContact(
    @Query('limit') limit: number,
    @Query('page') page: number,
  ): Promise<Contact[]> {
    return await this.contactService.getAllContact(page, limit);
  }

  @Get('filter')
  async filterContact(
    @Query('name')
    name: string,
    @Query('contact')
    contact: number,
  ): Promise<Contact[]> {
    return await this.contactService.filterContact(name, contact);
  }

  @Get(':id')
  async getSingleContact(@Param('id') id: string): Promise<Contact> {
    return await this.contactService.getSingleContact(id);
  }

  @Put('update/:id')
  async updateContact(
    @Body()
    data: object,
    @Param('id')
    id: string,
  ): Promise<{ id: any; message: string }> {
    return await this.contactService.updateContact(id, data);
  }

  @Delete('delete/:id')
  async deleteContact(
    @Param('id')
    id: string,
  ): Promise<{ message: string }> {
    return await this.contactService.deleteContact({ id });
  }
}
