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
import { ContactInputDto } from './dto/contact.input.dto';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('add')
  async addSingleContact(@Body() data: ContactInputDto) {
    return await this.contactService.addSingleContact(data);
  }

  @Post('add-multiple')
  async addMultipleContact(@Body() data: ContactInputDto[]) {
    return await this.contactService.addMultipleContact(data);
  }

  @Get(':id')
  async getSingleContact(@Param('id') id: string) {
    return await this.contactService.getSingleContact(id);
  }

  @Get('all')
  async getAllContact(
    @Query('limit') limit: number,
    @Query('page') page: number,
  ) {
    return await this.contactService.getAllContact(page, limit);
  }

  @Get('filter')
  async filterContact(
    @Query('name')
    name: string,
    @Query('contact')
    contact: number,
  ) {
    return await this.contactService.filterContact(name, contact);
  }

  @Put('update/:id')
  async updateContact(
    @Body()
    data: object,
    @Param('id')
    id: string,
  ) {
    return await this.contactService.updateContact(id, data);
  }

  @Delete('delete/:id')
  async deleteContact(
    @Param('id')
    id: string,
  ) {
    return await this.contactService.deleteContact({ id });
  }
}
